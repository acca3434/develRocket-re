import { NextRequest, NextResponse } from "next/server"
import AWS from "aws-sdk"
import calculateSecretHash from "@/app/_utils/cognitoFn/secretHash"
import { InitiateAuthResponse } from "aws-sdk/clients/cognitoidentityserviceprovider"
import axios from "axios"
import { cookies } from "next/headers"

const { REGION, COGNITO_ID, ACCESS_KEY_ID, SECRET_ACCESS_KEY, COGNITO_CLIENT_ID, COGNITO_CLIENT_SECRET } = process.env
AWS.config.update({ region: REGION, accessKeyId: ACCESS_KEY_ID, secretAccessKey: SECRET_ACCESS_KEY })

const CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider()

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { id, pw } = await req.json()
        if (!COGNITO_ID || !COGNITO_CLIENT_SECRET || !COGNITO_CLIENT_ID) return
        const params = {
            AuthFlow: "USER_PASSWORD_AUTH",
            ClientId: COGNITO_CLIENT_ID,
            AuthParameters: {
                USERNAME: id,
                PASSWORD: pw,
                SECRET_HASH: calculateSecretHash(COGNITO_CLIENT_SECRET, COGNITO_CLIENT_ID, id),
            },
        }
        try {
            const { AuthenticationResult } = await new Promise<InitiateAuthResponse>((resolve, reject) => {
                CognitoIdentityServiceProvider.initiateAuth(params, (err, data) => {
                    if (err) reject(err)
                    else resolve(data)
                })
            })
            if (!AuthenticationResult) throw new Error("로그인 실패")
            console.log(AuthenticationResult.AccessToken, AuthenticationResult.RefreshToken, 111)
            return NextResponse.json({}, { status: 200 })
        } catch (e) {
            return NextResponse.json({ error: "로그인 실패" }, { status: 400 })
        }
    } catch (e: any) {
        return NextResponse.json(e, { status: 400 })
    }
}
