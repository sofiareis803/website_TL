export type Project = {
  title: string;
  description: string;
};

export type Member = {
  slug: string;
  name: string;
  course: string;
  photo: string; 
  interests: string[];
  projects: Project[];
  expectations: string;
};

export const members: Member[] = [
  {
    slug: "sofia",
    name: "Sofia Reis",
    course: "MEIC",
    photo: "/pictures/sofia.jpg",
    interests: ["Livros", "Séries", "Filmes", "Jogos"],
    projects: [
      {
        title: "TaxiGes",
        description:
          "O TaxiGes é uma aplicação web desenvolvida para modernizar a gestão de uma empresa de táxis, permitindo o controlo de frotas, motoristas, turnos e pedidos de serviço através de uma interface intuitiva e funcional.",
      },
    ],
    expectations: "Melhorar o meu trabalho em equipa e a minha capacidade de colaboração num projeto real.",
  },
  {
    slug: "diogo",
    name: "Diogo",
    course: "LEAer",
    photo: "/pictures/diogo.jpg",
    interests: ["Programação", "Jogos", "Ténis", "Ginásio"],
    projects: [{ title: "A.A.", description: "Script que connectava às APIs de um MMO e do discord para automatizar a limpeza de loot assim que o user se ligava ao jogo (detetado através da rich presence)." }],
    expectations: "Espero aprender mais sobre web development e webapps e eventualmente poder contribuir para os projetos da equipa.",
  },
  {
    slug: "rita",
    name: "Rita Vieira",
    course: "LEIC",
    photo: "/pictures/rita.jpg",
    interests: ["Volley", "Livros", "Música", "Crochet", "Desportos (Futebol, Ténis, Fórmula1)"],
    projects: [{ title: "Sistema faturação de produtos (IAED)", description: "Sistema que permitia adicionar, remover e listar produtos e no fim criava a fatura associada ao cliente." }],
    expectations: "Desenvolvimento de apps e ganhar conhecimentos ligados à minha área para além do curso.",
  },
];