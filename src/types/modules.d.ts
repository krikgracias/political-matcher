declare module '*.jsx' {
  const component: React.ComponentType<any>;
  export default component;
}

declare module '*.js' {
  const value: any;
  export default value;
  export const ELECTION_CONFIG: any;
}