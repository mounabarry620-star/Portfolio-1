import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): {
        title: string;
        description: string;
        tags: string[];
    }[];
}
