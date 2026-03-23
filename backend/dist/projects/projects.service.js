"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
let ProjectsService = class ProjectsService {
    projects = [
        {
            title: 'SAE 1 - Site Web Statique',
            description: "Création d'un site vitrine responsive et moderne pour présenter une entreprise fictive",
            tags: ['HTML', 'CSS'],
        },
        {
            title: 'SAE 2 - Algorithmique',
            description: "Implémentation d'algorithmes de tri et analyse de leur complexité temporelle",
            tags: ['C++'],
        },
        {
            title: 'SAE 3 - Base de données',
            description: "Conception et gestion d'une base de données relationnelle avec travail collaboratif",
            tags: ['SQL', 'Collaboration'],
        },
        {
            title: 'Mon Portfolio',
            description: 'Mon portfolio interactif avec animations 3D et stack moderne',
            tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'NestJS'],
        },
    ];
    findAll() {
        return this.projects;
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)()
], ProjectsService);
//# sourceMappingURL=projects.service.js.map