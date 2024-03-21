import { http, HttpResponse, JsonBodyType, RequestHandler } from 'msw'
import { setupServer, SetupServerApi } from 'msw/node'

type MockRequest = (params: { responseJson: JsonBodyType; method: keyof typeof http; url: string }) => void

export function setupHttpMocksServer(serverOptions: RequestHandler[] = []): {
  server: SetupServerApi
  mockRequest: MockRequest
} {
  // Обычно хватает мокнуть в serverOptions
  const server = setupServer(...serverOptions)
  // Если вам нужно на каждый тест с одним url прогонять разные ответы
  const mockRequest: MockRequest = ({ responseJson, method, url }) => {
    server.use(http[method](url, () => HttpResponse.json(responseJson)))
  }

  return { server, mockRequest }
}
