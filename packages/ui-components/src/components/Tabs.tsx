import * as React from "react";
import { Tabs as DefaultTabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

type TabsProps = {
  tabItems: {
    id: string;
    tabsDataLabel: string;
    tabsDataValue: string;
  }[];
  children?: React.ReactNode;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Tabs = ({ tabItems, children, ...rest }: TabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <DefaultTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabItems.map((name, index) => (
            <Tab label={name.tabsDataLabel} {...a11yProps(0)}></Tab>
          ))}
        </DefaultTabs>
      </Box>
      {tabItems.map((name, index) => (
        <TabPanel value={value} index={index}>
          {children}
        </TabPanel>
      ))}
    </Box>
  );
};

export default Tabs;
