import { useState } from "react";
import useSWR from "swr";
import { Card, CardHeader, Divider, IconButton } from "@material-ui/core";

import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";

import Flex from "../../../components/Flex";
import useStyles from "./useStyles";
import useGlobalAccountStyles from "../useGlobalAccountStyles";
import FormPersonAccount from "./FormPersonAccount";

export default function PersonAccount() {
  const classes = useStyles();
  const globalClasses = useGlobalAccountStyles();
  const [isEdit, setIsEdit] = useState(false);

  const { data: user } = useSWR("/users/1");

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
