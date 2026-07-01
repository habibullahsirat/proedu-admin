import bcrypt from "bcryptjs";

const password = "Admin123"; // The password you enter in Postman
const hash = "$2b$12$BWstxA8LkeJjdZ0WeNiK.tiYpgHSdf0jbGMJRbBVxtQHNdRrj3k2";

console.log(await bcrypt.compare(password, hash));
