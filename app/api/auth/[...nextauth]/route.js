
import NextAuth from "next-auth"
import nextAuth, {Account, User as AuthUser } from "next-auth" 
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"; 
import { mongoDbConnection } from "@/config/mongoDB";
import bcrypt from "bcryptjs"
import User from "@/models/User";    


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id : "credentials",
      name : "Credentials",
      credentials : {
        email : {label : "Email", type : "text"},
        password : {label : "Password", type : "password"}
      },
      async authorize(credentials) {
          await mongoDbConnection();

          try {
            const user = await User.findOne({ email : credentials.email});

            if (user) {
              const isPassword = await bcrypt.compare(credentials.password, user.password); 

              if (isPassword) {
                return user;
              }
              
            }
          } catch (error) {
            throw new Error(error) 
          }
      }
    }), 
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // ...add more providers here
  ],
}


export const handler = NextAuth(authOptions);

export { handler as GET , handler as POST }; 

















