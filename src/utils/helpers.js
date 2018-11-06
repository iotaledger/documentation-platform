export const getVersion = path => path.match(/(?<=reference\/).*?(?=\/+)/)[0];

export const getProjectName = path => path.match(/(?<=docs\/).*?(?=\/+)/)[0];
