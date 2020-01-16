import UsersService from "#root/adapters/UsersService";

const createUserSessionResolver = async (obj, { email, password }, context) => {
  const userSession = UsersService.createUserSession({ email, password });

  // userSessionID is name of the cookie, value is the .id, httpOnly means
  context.res.cookie("userSessionId", userSession.id, { httpOnly: true });

  return userSession;
};

export default createUserSessionResolver;
