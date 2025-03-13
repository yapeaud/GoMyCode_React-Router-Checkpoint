import React from 'react';

const Filter = ({ setFilter }) => {
    return (
        <>
            <section className="d-flex gap-3 mb-4">
                <input
                    type="text"
                    placeholder="Recherche par titre..."
                    className="form-control me-2"
                    onChange={(e) => setFilter((prev) => ({ ...prev, title: e.target.value }))}
                />
                <input
                    type="number"
                    placeholder="Note"
                    className="form-control"
                    onChange={(e) => setFilter((prev) => ({ ...prev, rating: Number(e.target.value) }))}
                />
            </section>
        </>
    );
};

export default Filter;