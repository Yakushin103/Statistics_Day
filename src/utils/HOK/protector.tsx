import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { routePaths, UserRoles } from '../constants'
import { RootState } from '../../store/store'


export const accessCheck = (user: any, roles: UserRoles) => {
  //@ts-ignore
  if (user && roles === 'any') { return true; }

  let required = [roles];
  if (Array.isArray(roles)) {
    required = roles;
  }

  return required.includes(user?.role || 'none');
};

const protector = (Page: any, roles: UserRoles) => memo(
  (props) => {
    const user = useSelector(({ main }: RootState) => main.user);

    const isRoleAccepted = accessCheck(user, roles);
    //@ts-ignore
    const isActive = user?.status === 'active';

    if (
      !isRoleAccepted ||
      (user && !isActive)
    ) {
      return <Redirect to={routePaths.home} />;
    }

    return <Page {...props} />;
  },
);

export const SimpleRoleChecker = (props: any) => {
  const user = useSelector(({ main }: RootState) => main.user);

  const isRoleAccepted = accessCheck(user, props.roles);
  //@ts-ignore
  const isActive = user?.status === 'active';

  if (!isRoleAccepted || !isActive) { return null; }

  return props.children;
};

export const RoleChecker = memo(SimpleRoleChecker); // SimpleRoleChecker with HOCs

export default protector;