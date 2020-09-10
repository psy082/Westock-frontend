import { JS_KEY } from "../../../../../../config";

export const kakaoApi = (setToken, history) => {
  window.Kakao.init(JS_KEY);
  console.log(window.Kakao.isInitialized());
  console.log(window.Kakao);
  window.Kakao.Auth.login({
    success: ({ access_token }) => setToken(access_token, "kakao", history),
  });
};

export default {
  kakaoApi,
};
