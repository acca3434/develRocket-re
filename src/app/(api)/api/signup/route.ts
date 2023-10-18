import { NextRequest, NextResponse } from "next/server"
import AWS from "aws-sdk"
import calculateSecretHash from "@/app/_utils/cognitoFn/secretHash"

const { REGION, COGNITO_ID, ACCESS_KEY_ID, SECRET_ACCESS_KEY, COGNITO_CLIENT_ID, COGNITO_CLIENT_SECRET } = process.env
AWS.config.update({ region: REGION, accessKeyId: ACCESS_KEY_ID, secretAccessKey: SECRET_ACCESS_KEY })

const CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider()

export async function POST(req: NextRequest) {
    try {
        const { id, pw } = await req.json()
        if (!COGNITO_ID || !COGNITO_CLIENT_SECRET || !COGNITO_CLIENT_ID) return
        const signUpRequest = {
            ClientId: COGNITO_CLIENT_ID,
            Username: id,
            Password: pw,
            SecretHash: calculateSecretHash(COGNITO_CLIENT_SECRET, COGNITO_CLIENT_ID, id),
        }
        const { UserConfirmed, UserSub } = await CognitoIdentityServiceProvider.signUp(signUpRequest).promise()

        if (!UserConfirmed) {
            const params = {
                UserPoolId: COGNITO_ID,
                Username: id,
            }
            CognitoIdentityServiceProvider.adminConfirmSignUp(params, (err, data) => {
                if (err) {
                    return Response.json(err)
                }
            })
        }
        return NextResponse.json({ UserSub })
    } catch (e: any) {
        return NextResponse.json(e, { status: 400 })
    }
}
// client.initiateAuth(params, (err, data) => {
//     if (err) {
//         console.log(err)
//         return Response.json(err)
//     } else {
//         console.log(data)
//         return Response.json(data)
//     }
// })
