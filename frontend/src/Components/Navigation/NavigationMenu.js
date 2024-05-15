import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const navigationMenu = [
  {
    title: "Home",
    icon: <HomeIcon style={{ color: "white", width: 35, height: 35 }} />,
    path: "/",
  },
  {
    title: "Create New Post",
    icon: <AddCircleIcon style={{ color: "white", width: 35, height: 35 }} />,
    path: "/createpost",
  },
  {
    title: "Notifications",
    icon: (
      <NotificationsIcon style={{ color: "white", width: 35, height: 35 }} />
    ),
    path: "/notifications",
  },
  {
    title: "Create Workout Status",
    icon: <AddCircleIcon style={{ color: "white", width: 35, height: 35 }} />,
    path: "/workoutstatus",
  },
  {
    title: "Plan Sharing",
    icon: <DescriptionIcon style={{ color: "white", width: 35, height: 35 }} />,
    path: "/plansharing",
  },
  {
    title: "Meal Plan",
    icon: <RestaurantIcon style={{ color: "white", width: 35, height: 35 }} />,
    path: "/MealPlan",
  },
  {
    title: "Profile",
    icon: (
      <AccountCircleIcon style={{ color: "white", width: 35, height: 35 }} />
    ),
    path: "/profile",
  },
];
