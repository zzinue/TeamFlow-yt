import {createWorkSpace, listWorkspaces} from "@/app/router/workspace";

export const router = {
    workspace: {
        list: listWorkspaces,
        create: createWorkSpace,
    }

}