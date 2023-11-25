"use client";
import { useZustandStore } from "@/store";
import { Input, Modal } from "antd";
import React, { useState } from "react";
import Column from "./@column";

/*

Zustand benefits
less boilerplate
doesnt rely on provider
small package size
faster and optimized than context only renders component where the peice of state changes
*/

const Zustand = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState({ name: "", status: 0 });
  const addTask = useZustandStore((state: any) => state.addTasks);

  const showModal = (status: number) => {
    setIsModalOpen(true);
    setTask((state: any) => ({ ...state, status }));
  };

  const handleOk = () => {
    addTask(task.name, task.status);
    handleCancel();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setTask({ name: "", status: 0 });
  };

  return (
    <div style={{ display: "flex" }}>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          onChange={(e: any) =>
            setTask((state) => ({ ...state, name: e.target.value }))
          }
          value={task.name}
        ></Input>
      </Modal>
      <Column heading={"To-do"} status={0} showModal={showModal} />
      <Column heading={"Progress"} status={1} showModal={showModal} />
      <Column heading={"Done"} status={2} showModal={showModal} />
    </div>
  );
};

export default Zustand;
