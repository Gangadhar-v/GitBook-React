

export  interface RepoStructure{

    name:string,
    description:string | null,
    language:string,
    stargazers_count:number,
    watchers:number,
    forks_count:number,
    created_at:string,
    html_url:string,
    visibility:string
}