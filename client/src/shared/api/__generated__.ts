import { api } from './api';
export const addTagTypes = ['Boards', 'Issues', 'Teams', 'Users'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      getBoards: build.query<GetBoardsApiResponse, GetBoardsApiArg>({
        query: () => ({ url: `/boards` }),
        providesTags: ['Boards'],
      }),
      getBoardsByBoardId: build.query<GetBoardsByBoardIdApiResponse, GetBoardsByBoardIdApiArg>({
        query: queryArg => ({ url: `/boards/${queryArg.boardId}` }),
        providesTags: ['Boards'],
      }),
      getTasks: build.query<GetTasksApiResponse, GetTasksApiArg>({
        query: () => ({ url: `/tasks` }),
        providesTags: ['Issues'],
      }),
      getTasksByTaskId: build.query<GetTasksByTaskIdApiResponse, GetTasksByTaskIdApiArg>({
        query: queryArg => ({ url: `/tasks/${queryArg.taskId}` }),
        providesTags: ['Issues'],
      }),
      postTasksCreate: build.mutation<PostTasksCreateApiResponse, PostTasksCreateApiArg>({
        query: queryArg => ({ url: `/tasks/create`, method: 'POST', body: queryArg.modelsCreateTaskRequest }),
        invalidatesTags: ['Issues'],
      }),
      putTasksUpdateByTaskId: build.mutation<PutTasksUpdateByTaskIdApiResponse, PutTasksUpdateByTaskIdApiArg>({
        query: queryArg => ({
          url: `/tasks/update/${queryArg.taskId}`,
          method: 'PUT',
          body: queryArg.modelsUpdateTaskRequest,
        }),
        invalidatesTags: ['Issues'],
      }),
      putTasksUpdateStatusByTaskId: build.mutation<
        PutTasksUpdateStatusByTaskIdApiResponse,
        PutTasksUpdateStatusByTaskIdApiArg
      >({
        query: queryArg => ({
          url: `/tasks/updateStatus/${queryArg.taskId}`,
          method: 'PUT',
          body: queryArg.modelsUpdateTaskStatusRequest,
        }),
        invalidatesTags: ['Issues'],
      }),
      getTeams: build.query<GetTeamsApiResponse, GetTeamsApiArg>({
        query: () => ({ url: `/teams` }),
        providesTags: ['Teams'],
      }),
      getTeamsByTeamId: build.query<GetTeamsByTeamIdApiResponse, GetTeamsByTeamIdApiArg>({
        query: queryArg => ({ url: `/teams/${queryArg.teamId}` }),
        providesTags: ['Teams'],
      }),
      getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
        query: () => ({ url: `/users` }),
        providesTags: ['Users'],
      }),
      getUsersByIdTasks: build.query<GetUsersByIdTasksApiResponse, GetUsersByIdTasksApiArg>({
        query: queryArg => ({ url: `/users/${queryArg.id}/tasks` }),
        providesTags: ['Users'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as enhancedApi };
export type GetBoardsApiResponse = /** status 200 Успешный ответ со списком досок */ ModelsGetBoardsResponse[];
export type GetBoardsApiArg = void;
export type GetBoardsByBoardIdApiResponse = /** status 200 OK */ ModelsGetTasksOnBoardResponse[];
export type GetBoardsByBoardIdApiArg = {
  /** ID доски */
  boardId: number;
};
export type GetTasksApiResponse = /** status 200 OK */ ModelsGetTasksResponse[];
export type GetTasksApiArg = void;
export type GetTasksByTaskIdApiResponse = /** status 200 OK */ ModelsGetTaskByIdResponse;
export type GetTasksByTaskIdApiArg = {
  /** ID задачи */
  taskId: number;
};
export type PostTasksCreateApiResponse = /** status 201 Задача успешно создана */ ModelsCreateTaskResponse;
export type PostTasksCreateApiArg = {
  /** Данные для создания задачи */
  modelsCreateTaskRequest: ModelsCreateTaskRequest;
};
export type PutTasksUpdateByTaskIdApiResponse = /** status 200 OK */ ModelsUpdateTaskResponse;
export type PutTasksUpdateByTaskIdApiArg = {
  /** ID задачи */
  taskId: number;
  /** Данные для обновления задачи */
  modelsUpdateTaskRequest: ModelsUpdateTaskRequest;
};
export type PutTasksUpdateStatusByTaskIdApiResponse = /** status 200 OK */ ModelsUpdateTaskStatusResponse;
export type PutTasksUpdateStatusByTaskIdApiArg = {
  /** ID задачи */
  taskId: number;
  /** Данные для обновления статуса задачи */
  modelsUpdateTaskStatusRequest: ModelsUpdateTaskStatusRequest;
};
export type GetTeamsApiResponse = /** status 200 OK */ ModelsGetTeamsResponse[];
export type GetTeamsApiArg = void;
export type GetTeamsByTeamIdApiResponse = /** status 200 OK */ ModelsGetTeamResponse;
export type GetTeamsByTeamIdApiArg = {
  /** ID команды */
  teamId: number;
};
export type GetUsersApiResponse = /** status 200 OK */ ModelsGetUsersResponse[];
export type GetUsersApiArg = void;
export type GetUsersByIdTasksApiResponse = /** status 200 OK */ ModelsGetUserTasksResponse[];
export type GetUsersByIdTasksApiArg = {
  /** ID пользователя */
  id: number;
};
export type ModelsGetBoardsResponse = {
  description?: string;
  id?: number;
  name?: string;
  taskCount?: number;
};
export type ErrsErrorResponse = {
  error?: string;
  message?: string;
};
export type ModelsAssigneeUserForTask = {
  avatarUrl?: string;
  email?: string;
  fullName?: string;
  id?: number;
};
export type ModelsGetTasksOnBoardResponse = {
  assignee?: ModelsAssigneeUserForTask;
  description?: string;
  id?: number;
  priority?: 'Low' | 'Medium' | 'High';
  status?: 'Backlog' | 'InProgress' | 'Done';
  title?: string;
};
export type ModelsGetTasksResponse = {
  assignee?: ModelsAssigneeUserForTask;
  assigneeId?: number;
  boardId?: number;
  boardName?: string;
  description?: string;
  id?: number;
  priority?: 'Low' | 'Medium' | 'High';
  status?: 'Backlog' | 'InProgress' | 'Done';
  title?: string;
};
export type ModelsGetTaskByIdResponse = {
  assignee?: ModelsAssigneeUserForTask;
  boardName?: string;
  description?: string;
  id?: number;
  priority?: 'Low' | 'Medium' | 'High';
  status?: 'Backlog' | 'InProgress' | 'Done';
  title?: string;
};
export type ModelsCreateTaskResponse = {
  id?: number;
};
export type ModelsCreateTaskRequest = {
  assigneeId: number;
  boardId: number;
  description: string;
  priority?: 'Low' | 'Medium' | 'High';
  title: string;
};
export type ModelsUpdateTaskResponse = {
  message?: string;
};
export type ModelsUpdateTaskRequest = {
  assigneeId: number;
  description: string;
  priority?: 'Low' | 'Medium' | 'High';
  status?: 'Backlog' | 'InProgress' | 'Done';
  title: string;
};
export type ModelsUpdateTaskStatusResponse = {
  message?: string;
};
export type ModelsUpdateTaskStatusRequest = {
  status?: 'Backlog' | 'InProgress' | 'Done';
};
export type ModelsGetTeamsResponse = {
  boardsCount?: number;
  description?: string;
  id?: number;
  name?: string;
  usersCount?: number;
};
export type ModelsGetTeamBoards = {
  description?: string;
  id?: number;
  name?: string;
};
export type ModelsGetTeamUsers = {
  avatarUrl?: string;
  description?: string;
  email?: string;
  fullName?: string;
  id?: number;
};
export type ModelsGetTeamResponse = {
  boards?: ModelsGetTeamBoards[];
  description?: string;
  id?: number;
  name?: string;
  users?: ModelsGetTeamUsers[];
};
export type ModelsGetUsersResponse = {
  avatarUrl?: string;
  description?: string;
  email?: string;
  fullName?: string;
  id?: number;
  tasksCount?: number;
  teamId?: number;
  teamName?: string;
};
export type ModelsGetUserTasksResponse = {
  boardName?: string;
  description?: string;
  id?: number;
  priority?: 'Low' | 'Medium' | 'High';
  status?: 'Backlog' | 'InProgress' | 'Done';
  title?: string;
};
export const {
  useGetBoardsQuery,
  useLazyGetBoardsQuery,
  useGetBoardsByBoardIdQuery,
  useLazyGetBoardsByBoardIdQuery,
  useGetTasksQuery,
  useLazyGetTasksQuery,
  useGetTasksByTaskIdQuery,
  useLazyGetTasksByTaskIdQuery,
  usePostTasksCreateMutation,
  usePutTasksUpdateByTaskIdMutation,
  usePutTasksUpdateStatusByTaskIdMutation,
  useGetTeamsQuery,
  useLazyGetTeamsQuery,
  useGetTeamsByTeamIdQuery,
  useLazyGetTeamsByTeamIdQuery,
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useGetUsersByIdTasksQuery,
  useLazyGetUsersByIdTasksQuery,
} = injectedRtkApi;
