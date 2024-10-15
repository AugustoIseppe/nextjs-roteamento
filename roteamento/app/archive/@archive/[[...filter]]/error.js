"use client";

export default function FilterError({ error }) {
    return (
        <div id="error">
        <h2>Invalid Filter</h2>
        <p>{error.message}</p>
        </div>
    );
}