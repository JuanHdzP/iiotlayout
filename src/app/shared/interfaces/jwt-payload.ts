export interface IJwtPayload {
  id: number;
  name: string;
  email: string;
  img: string;
  branchToUser: IPayloadBranchesUsers[];
}

export interface IPayloadBranchesUsers {
  id: number;
  branch: IPayloadBranch;
  active: boolean;
}

export interface IPayloadBranch {
  id: number;
  name: string;
}
