import { useState } from "react";
import useSWR from "swr";
import { Card, CardHeader, Divider, IconButton } from "@mui/material";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

import Flex from "../../../components/Flex";
import useStyles from "./useStyles";
import useGlobalAccountStyles from "../useGlobalAccountStyles";
import FormPersonAccount from "./FormPersonAccount";

// TODO: sugestão de nome pro componente: `PageAccountPerson` ou `AccountPerson` (baseado na estrutura dos arquivos)
export default function PersonAccount() {
  const classes = useStyles();
  const globalClasses = useGlobalAccountStyles();
  const [isEdit, setIsEdit] = useState(false);

  const { data: user } = useSWR("//localhost:3333/users/1");

  function handleToggleEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <Card>
      <CardHeader
        title={
          <Flex className={globalClasses.header}>
            <Flex className={globalClasses.header}>
              <PersonRoundedIcon className={globalClasses.icon} />
              <div>Sua Conta</div>
            </Flex>
            <Flex className={globalClasses.header}>
              {isEdit && (
                <IconButton type="submit" variant="secondary">
                  <SaveIcon className={classes.iconButton} />
                </IconButton>
              )}
              <IconButton onClick={handleToggleEdit}>
                {isEdit ? (
                  <CloseIcon className={classes.iconButton} />
                ) : (
                  <EditIcon className={classes.iconButton} />
                )}
              </IconButton>
            </Flex>
          </Flex>
        }
        titleTypographyProps={{ variant: "h3" }}
      />
      <Divider />
      {!!user && <FormPersonAccount user={user} isEdit={isEdit} />}
    </Card>
  );
}
