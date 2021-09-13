const authSubroute = 'auth'
const request = 'request'
const sales = 'sales'
const overtime = 'overtime'
const userSubroute = 'user'
export const routePaths = {
  home: '/',
  auth: {
    signIn: `/${authSubroute}/sign-in`,
    signUp: `/${authSubroute}/sign-up`,
    forgotPassword: `/${authSubroute}/forgot-password`,
    resetPassword: `/${authSubroute}/reset-password`,
  },
  common: {
    createRequest: `/${request}/create`,
    createOvertime: `/${overtime}/create`,
    user: {
      list: `/${userSubroute}/list`,
      one: `/${userSubroute}/:id`,
      createLink: (id: number) => `/${userSubroute}/${id}`,
    },
  },
  admin: {},
  sales: {
    createProject: `/${sales}/create-project`,
    createCv: `/${sales}/create-cv`,
    createPortfolio: `/${sales}/create-portfolio`,
  },
  hrBoards: '/hr-boards',
  diagram: '/diagram',
  staff: '/staff',
}

export type UserRoles = typeof userRoles
export const userRoles = {
  admin: 'admin',
  sales: 'sales',
  officeManager: 'officeManager',
  hr: 'hr',
  mentor: 'mentor',
  user: 'user',
  student: 'student',
}
export const userRolesList = Object.values(userRoles)