import { useState } from "react";
import { Card, CardHeader, Divider, IconButton } from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

import { Flex } from "../../../components";
import useStyles from "./useStyles";
import useGlobalAccountStyles from "../useGlobalAccountStyles";
import FormPersonAccount from "./FormPersonAccount";
import { useLoggedInUser } from "../../../store/reducers/user/selectors";

export default function PagesAccountPerson() {
  const classes = useStyles();
  const globalClasses = useGlobalAccountStyles();
  const [isEdit, setIsEdit] = useState(false);
  const userLoggedIn = useLoggedInUser();

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
      {userLoggedIn && (
        <FormPersonAccount
          user={userLoggedIn}
          isEdit={isEdit}
          handleToggleEdit={handleToggleEdit}
        />
      )}
    </Card>
  );
}
