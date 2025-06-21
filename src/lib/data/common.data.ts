import {
  AndroidStudio,
  CSS,
  Dart,
  Flutter,
  HTML,
  Intellij,
  Java,
  JavaScript,
  MongoDB,
  NPM,
  PostgreSQL,
  React,
  SpringBoot,
  TailwindCss,
  TypeScript,
  VisualStudioCode,
} from "../../assets/images";
import type { MenuListType } from "../type/common.type";

export const MenuList: MenuListType[] = [
  {
    label: "Hero",
    path: "#hero",
    icon: "home",
  },
  {
    label: "Skill",
    path: "#skill",
    icon: "skill",
  },
  {
    label: "Experience",
    path: "#experience",
    icon: "work",
  },
  {
    label: "Project",
    path: "#project",
    icon: "project",
  },
  {
    label: "Contact",
    path: "#contact",
    icon: "mail",
  },
];

export type SkillKey =
  | "android-studio"
  | "css"
  | "dart"
  | "flutter"
  | "html"
  | "intellij"
  | "java"
  | "javascript"
  | "typescript"
  | "mongo-db"
  | "npm"
  | "my-sql"
  | "postgresql"
  | "react"
  | "spring"
  | "tailwind"
  | "visual-studio-code";

export const SkillImage = {
  "android-studio": AndroidStudio,
  css: CSS,
  dart: Dart,
  flutter: Flutter,
  html: HTML,
  intellij: Intellij,
  java: Java,
  javascript: JavaScript,
  typescript: TypeScript,
  "mongo-db": MongoDB,
  npm: NPM,
  postgresql: PostgreSQL,
  "my-sql": PostgreSQL,
  react: React,
  spring: SpringBoot,
  tailwind: TailwindCss,
  "visual-studio-code": VisualStudioCode,
};

export type ImageList = {
  image: SkillKey;
  name: string;
  description?: string;
};

export type SkillListTpe = {
  title: string;
  description?: string;
  list: ImageList[];
};

export const SkillsList: SkillListTpe[] = [
  {
    title: "Programming",
    description: "",
    list: [
      {
        image: "html",
        name: "HTML",
        description: "",
      },
      {
        image: "css",
        name: "CSS",
        description: "",
      },
      {
        image: "javascript",
        name: "Javascript",
        description: "",
      },
      {
        image: "typescript",
        name: "Typescript",
        description: "",
      },
      {
        image: "java",
        name: "Java",
        description: "",
      },
      {
        image: "dart",
        name: "Dart",
        description: "",
      },
    ],
  },
  {
    title: "Frameworks / Libraries",
    list: [
      {
        image: "react",
        name: "React",
      },
      {
        image: "spring",
        name: "Spring Boot",
      },
      {
        image: "flutter",
        name: "Flutter",
      },
      {
        image: "tailwind",
        name: "Tailwind CSS",
      },
      {
        image: "npm",
        name: "NPM",
      },
    ],
  },
  {
    title: "Data Base",
    description: "",
    list: [
      {
        image: "mongo-db",
        name: "Mongo DB",
        description: "",
      },
      {
        image: "postgresql",
        name: "PostgreSQL",
        description: "",
      },
      {
        image: "my-sql",
        name: "My SQL",
      },
    ],
  },
  {
    title: "IDEs",
    description: "",
    list: [
      {
        image: "visual-studio-code",
        name: "Visual Studio Code",
        description:
          "Actively Using Visual Studio Code For React Web Application Development",
      },
      {
        image: "intellij",
        name: "Intellij",
        description:
          "For Create Rest APIs I Prefer to Use Intellij Community Edition",
      },
      {
        image: "android-studio",
        name: "Android Studio",
        description: "Used Android Studio For Flutter App Development",
      },
    ],
  },
  {
    title: "Data Base",
    description: "",
    list: [
      {
        image: "mongo-db",
        name: "Mongo DB",
        description: "",
      },
      {
        image: "postgresql",
        name: "PostgreSQL",
        description: "",
      },
      {
        image: "my-sql",
        name: "My SQL",
      },
    ],
  },
  {
    title: "Data Base",
    description: "",
    list: [
      {
        image: "mongo-db",
        name: "Mongo DB",
        description: "",
      },
      {
        image: "postgresql",
        name: "PostgreSQL",
        description: "",
      },
      {
        image: "my-sql",
        name: "My SQL",
      },
    ],
  },
];
