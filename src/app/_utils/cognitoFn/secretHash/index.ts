import * as crypto from "crypto"

/**
 *
 * @param clientSecret Cognito - 클라이언트 보안키
 * @param clientId Cognito - 클라이언트 ID
 * @param username 생성하는 유저의 ID
 * @returns
 */
export default function calculateSecretHash(clientSecret: string, clientId: string, username: string) {
    return crypto
        .createHmac("SHA256", clientSecret)
        .update(username + clientId)
        .digest("base64")
}
