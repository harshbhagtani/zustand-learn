"use client";
import { useZustandStore } from "@/store";
import { Button } from "antd";
import React from "react";
import styles from "./styles.module.css";

const Column = ({
  heading,
  status,
  showModal
}: {
  heading: string;
  status: number;
  showModal: (status: number) => void;
}) => {
  const tasks = useZustandStore((state: any) =>
    state.tasks.filter((item: any) => item.status === status)
  );
  const addTask = useZustandStore((state: any) => state.addTasks);

  return (
    <div className={styles.container}>
      <Button onClick={() => showModal(status)}>Add task</Button>
      <h4>{heading}</h4>
      <ul>
        {tasks?.map((task: any, index: number) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Column);
