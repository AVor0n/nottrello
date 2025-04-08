export const enum Paths {
  home = '/',
  boards = '/boards',
  board = '/board/:boardId',
  issues = '/issues',
}

export const navLinks: { label: string; path: Paths }[] = [
  { label: 'Boards', path: Paths.boards },
  { label: 'Issues', path: Paths.issues },
];
