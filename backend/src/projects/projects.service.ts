import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  private readonly projects = [
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
}
