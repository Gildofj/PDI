import { useEffect, useState } from "react";
import useSWR from "swr";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";

import useStyles from "./useStyles";
import Flex from "../../../components/Flex";
import useGlobalAccountStyles from "../useGlobalAccountStyles";

export default function PersonAccount() {
  const classes = useStyles();
  const globalClasses = useGlobalAccountStyles();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { data: user } = useSWR("/users/1");

  useEffect(() => {
    resetValues();
  }, [user]);

  function resetValues() {
    setName(user?.name);
    setEmail(user?.email);
    setPhone(user?.phone);
  }

  function handleChange(event, state) {
    switch (state) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      default:
        break;
    }
  }

  function handleToggleEdit() {
    setIsEdit(!isEdit);
    if (isEdit) {
      resetValues();
    }
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
      <Flex className={classes.flex}>
        <CardContent>
          {!!user && (
            <>
              <Avatar
                className={classes.avatar}
                src={user.img}
                alt={user.name}
              />
              <InputLabel htmlFor="name">Nome: </InputLabel>
              <Input
                id="name"
                value={name}
                onChange={(e) => handleChange(e, "name")}
                disabled={!isEdit}
                className={classes.input}
              />
              <InputLabel htmlFor="email">E-mail: </InputLabel>
              <Input
                id="email"
                value={email}
                onChange={(e) => handleChange(e, "email")}
                disabled={!isEdit}
                className={classes.input}
              />
              <InputLabel htmlFor="phone">Telefone: </InputLabel>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => handleChange(e, "phone")}
                disabled={!isEdit}
                className={classes.input}
              />
            </>
          )}
        </CardContent>
      </Flex>
    </Card>
  );
}
