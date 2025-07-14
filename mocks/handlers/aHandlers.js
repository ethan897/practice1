import { http,HttpResponse } from "msw"

export const aHandlers = [
    http.get("/api/users", () => {
        let data = [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" }
        ]
        let resData = {status: 200, errmsg: "成功", data: data}
        return HttpResponse.json(resData)
    })
]