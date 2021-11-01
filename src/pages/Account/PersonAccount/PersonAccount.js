import { useState } from "react";
import useSWR from "swr";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import Button from "@material-ui/core/Button";
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
          <Flex className={classes.headerPersonAccount}>
            <Flex className={globalClasses.header}>
              <PersonRoundedIcon className={globalClasses.icon} />
              <div>Sua Conta</div>
            </Flex>
            <Flex className={globalClasses.header}>
              {isEdit && (
                <Button>
                  <SaveIcon className={classes.iconButton} />
                </Button>
              )}
              <Button onClick={handleToggleEdit}>
                {isEdit ? (
                  <CloseIcon className={classes.iconButton} />
                ) : (
                  <EditIcon className={classes.iconButton} />
                )}
              </Button>
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
