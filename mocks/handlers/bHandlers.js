import { http ,HttpResponse} from "msw"

export const bHandlers = [
    http.post("/api/login", async({request}) => {
        const postParams = await request.json()
        const { username, password } = postParams;
        if (username === "admin" && password === "password") {
            let data = { message: "Login successful!", token: "fake-jwt-token" }
            let resData = {status: 200, errmsg: "成功", data: data}
            return HttpResponse.json(resData)
        } 
        return HttpResponse.json({status: 403, errmsg: "失败", data: { message: "Invalid credentials" }})
    })
]