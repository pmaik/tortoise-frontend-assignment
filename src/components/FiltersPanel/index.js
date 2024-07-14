import React from "react";
import { Box, TextInput } from "grommet";
import { Funnel, ListChecks } from "phosphor-react";
import { Search } from "grommet-icons";
import { StyledButton } from "../StyledComponents";

const FiltersPanel = () => {
  return (
    <Box
      pad="medium"
      direction="row"
      align="center"
      justify="between"
      background="#fff"
    >
      <Box>
        <TextInput
          width="medium"
          placeholder="Search by name"
          icon={<Search size="medium" color="#CBCBCB" />}
          style={{
            background: "#FAFAFA",
            fontWeight: "initial",
            border: "1px solid #EEEEEE",
            borderRadius: "6px",
          }}
        />
      </Box>
      <Box direction="row" align="center" justify="between" gap="small">
        <StyledButton
          label="Filters"
          icon={<Funnel size={20} />}
          pad={{ horizontal: "small", vertical: "xsmall" }}
          style={{ border: "1px solid #EEEEEE", borderRadius: "8px" }}
        />
        <StyledButton
          label="Bulk actions"
          icon={<ListChecks size={20} />}
          pad={{ horizontal: "small", vertical: "xsmall" }}
          style={{ border: "1px solid #EEEEEE", borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
};

export default FiltersPanel;
