import router, { routesType } from "./routers";
import { usePermissionStore } from "./store/modules/permission";
import { useUserStore } from "./store/modules/user";

const whiteList = ["/login", "/auth-redirect"];

router.beforeEach(async (to, from, next) => {
  const UserStore = useUserStore();

  if (UserStore.token) {
    if (to.path === "/login") {
      next({ path: '/' })
    } else {
      try {
        const PermissionStore = usePermissionStore();

        if (!PermissionStore.routes.length) {
          const accessRoutes = await PermissionStore.generateRoutes(
            UserStore.roles
          ) as routesType[];

          console.log(accessRoutes);

          accessRoutes.forEach(i => router.addRoute(i)); // 动态添加访问路由表
          next({ ...to, replace: true }); // // 这里相当于push到一个页面 不在进入路由拦截
        } else {
          next(); // 如果不传参数就会重新执行路由拦截，重新进到这里
        }
      } catch (error) {
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    if (whiteList.includes(to.path)) next();
    else next(`/login?redirect=${to.path}`);
  }
});
