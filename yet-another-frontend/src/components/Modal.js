import React from "react";
import { searchTFBS } from "../services/remoteServices.js";
import { titleFormat } from "../utils/utils.js";

export default function Modal(props) {
    const [info, setInfo] = React.useState({});
    const [opened, setOpened] = React.useState(false);
    React.useEffect(() => {
        async function fetchData() {
            const data = await searchTFBS(
                props.tf,
                props.consensus,
                props.species
            );
            setInfo(data);
        }
        if (opened) fetchData();
    }, [props.tf, props.consensus, props.species, opened]);

    function openModal() {
        if (!opened) setOpened(true);
        document.getElementById(props.id).showModal();
    }

    return (
        <>
            <button className="btn btn-xs btn-ghost" onClick={openModal}>
                Ref
            </button>
            <dialog id={props.id} className="modal">
                <div className="modal-box w-11/12 max-w-full">
                    {Object.keys(info).length !== 0 && (
                        <table className="table">
                            <thead>
                                <tr>
                                    {Object.keys(info[0]).map((col) => (
                                        <th>{titleFormat(col)}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {info.map((row) => (
                                    <tr>
                                        {Object.keys(row).map((cell) => (
                                            <td>{row[cell]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}