/* browser: 使用handlers中的API代码，初始化配置 Service Worker */
import { setupWorker} from "msw/browser"
import { getHandlers } from "./handlers"
/* handlers： 主要为定义 API 逻辑的代码 */
export const mocker = setupWorker(...getHandlers)