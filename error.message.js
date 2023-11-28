export function ErrorMessage(message) {
    switch (message) {
        // 회원가입
        case 'Firebase: Error (auth/invalid-email).':
            return '이메일 형식이 올바르지 않습니다.'
        case 'Firebase: Error (auth/email-already-in-use).':
            return '이미 사용 중인 이메일입니다.'
        case 'password-not-matched':
            return '비밀번호가 일치하지 않습니다.'
        default:
            return '잠시 후 다시 시도해 주세요.'
    }
}
