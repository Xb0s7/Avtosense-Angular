interface ServiceDetailsService {
    id: number,
    title: string,
    description: string
}

export interface ServiceDetails {
    id: number,
    label: string,
    icon: string
    intro: string 
    allServices: ServiceDetailsService[],
}