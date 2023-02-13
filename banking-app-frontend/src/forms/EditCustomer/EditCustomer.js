import { useState } from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import BeforeEdit from "../BeforeEdit/BeforeEdit";
import CreateAccount from "../CreateAccount/CreateAccount";
import CreateCustomer from "../CreateCustomer/CreateCustomer";
import "./EditCustomer.css";

export default function EditCustomer() {
  useAuth();
  const { pathname } = useLocation();
  // const [validate, setValidate] = useState(false);
  const [editId, setEditId] = useState();
  const [validation, setValidation] = useState(false);

  const getEditData = (newValidate, newCustomerId) => {
    // setValidate(newValidate);
    setEditId(newCustomerId);
    if (newValidate) setValidation(true);
    console.log(newValidate, newCustomerId);
  };
  return (
    <>
      <h3 className="my-4">
        {pathname === "/manager/editcustomer"
          ? "Edit Customer"
          : "Edit Account"}
      </h3>
      {validation === false ? (
        <BeforeEdit getEditData={getEditData} />
      ) : pathname === "/manager/editcustomer" ? (
        <CreateCustomer editId={editId} />
      ) : (
        <CreateAccount editId={editId} />
      )}
    </>
  );
}
