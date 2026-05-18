export const GOOGLE_CLIENT_ID =
  '599415868452-9s2r4oeqojbl5dq7mhapjsjqk7uq9eh8.apps.googleusercontent.com'

// ✏️ เพิ่ม email ที่อนุญาตให้เข้าถึงได้ที่นี่
export const ALLOWED_GOOGLE_EMAILS: string[] = [
  'jaonai0954400179@gmail.com',
//   'jaonai0967211316@gmail.com',
  'akaradate0967211316@gmail.com',
]

export type GoogleUser = {
  email: string
  name: string
}

export function isGoogleEmailAllowed(email: string): boolean {
  return ALLOWED_GOOGLE_EMAILS.map((e) => e.toLowerCase()).includes(email.toLowerCase())
}
