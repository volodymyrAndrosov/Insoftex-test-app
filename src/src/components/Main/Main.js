import React from "react";
import styles from "./Main.module.less";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { makeSelectTodos } from "../../state/selectors/todos";
import { getTodos } from "../../state/actions/todos";
import Table from "../Table/Table";
import { columns } from "../../configs/tableColumnConfig";

const Main = () => {
  const dispatch = useDispatch();
  const todosData = useSelector(makeSelectTodos());
  const { todos } = todosData;

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const cuttedData = todos.slice(0, 15); // you can remove dat mock

  return (
    <div className={styles.Main}>
      <h1
        style={{
          textAlign: "center",
        }}>
        Main table with todos
      </h1>
      <Table data={cuttedData} columns={columns} />
    </div>
  );
};

export default Main;
