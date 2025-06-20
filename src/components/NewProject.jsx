import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancle }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const modalRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;
        if(enteredTitle ==='' || enteredDescription === '' || enteredDueDate === '') {
            modalRef.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
        // Here you would typically send this data to your backend or state management
        // console.log({ enteredTitle, enteredDescription, enteredDueDate });
    }
    return (
        <>
            <Modal ref={modalRef} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops....looks like you forgot to enter a value.</p>
                <p className='text-stone-600 mb-4'>Please make sure to provide valid input value to each field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancle}>Cancle</button></li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={titleRef} title="Title" />
                    <Input ref={descriptionRef} title="Description" textarea />
                    <Input type='date' ref={dueDateRef} title="Due Date" />
                </div>
            </div>
        </>
    )
}