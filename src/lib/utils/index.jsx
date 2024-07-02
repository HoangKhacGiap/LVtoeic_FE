import {
  HomeIcon,
  ClockIcon,
  UserCircleIcon,
  UserGroupIcon,
  PlusCircleIcon,
  DocumentPlusIcon
} from "@heroicons/react/24/solid";
export const navBar = [
  {
    link: "/login",
    nameItem: "Login",
  },
  {
    link: "/signup",
    nameItem: "SignUp",
  },
];
export const navSidebar = [
  {
    listItem: [
      {
        link: "/Role_Lecturer",
        nameItem: "Dashboard",
        iconItem: HomeIcon,
      },
      // {
      //   nameItem: "test1",
      //   iconItem: ClockIcon,
      // },
    ],
  },
  {
    titleGroup: "Data",
    listItem: [
      {
        link: "/Role_Lecturer-CreateGame",
        nameItem: "User Account",
        iconItem: UserCircleIcon,
      },
      {
        link: "/skill",
        nameItem: "Skill",
        iconItem: PlusCircleIcon,
      },
      {
        link: "/part",
        nameItem: "Part",
        iconItem: PlusCircleIcon,
      },
      {
        link: "/level",
        nameItem: "Level",
        iconItem: PlusCircleIcon,
      },
      {
        link: "/topic",
        nameItem: "Topic",
        iconItem: PlusCircleIcon,
      },
      {
        link: "/question",
        nameItem: "Question",
        iconItem: PlusCircleIcon,
      },
      {
        link: "/structure",
        nameItem: "Structure",
        iconItem: PlusCircleIcon,
      },
    ],
  },
];
