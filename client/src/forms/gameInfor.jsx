import React, { useState, forwardRef, useImperativeHandle } from 'react';

const GameInforForm = forwardRef(({ handleSubmit, purpose = 'save infor' }, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        publisher: '',
        releaseDate: '',
        imageUrl: '',
        shortDescription: ''
    });

    // useImperativeHandle giúp định nghĩa những gì component cha có thể truy cập qua ref
    useImperativeHandle(ref, () => ({
        getFormData: () => {
            return formData;
        },
        resetForm: () => {
            setFormData({
                name: '',
                price: 0,
                publisher: '',
                releaseDate: '',
                imageUrl: '',
                shortDescription: ''
            });
        }
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'price' ? parseInt(value, 10) || 0 : value
        });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Nhập thông tin Entity</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Tên sản phẩm / Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên (Name)</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Giá / Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Giá (Price)</label>
                    <input
                        type="number"
                        name="price"
                        min="0"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Nhà xuất bản / Publisher */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nhà xuất bản (Publisher)</label>
                    <input
                        type="text"
                        name="publisher"
                        value={formData.publisher}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Ngày phát hành / Release Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ngày phát hành (Release Date)</label>
                    <input
                        type="date"
                        name="releaseDate"
                        value={formData.releaseDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Đường dẫn ảnh / Image URL */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Link ảnh (Image URL)</label>
                    <input
                        type="url"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://example.com/image.png"
                    />
                </div>

                {/* Mô tả ngắn / Short Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả ngắn (Short Description)</label>
                    <textarea
                        name="shortDescription"
                        value={formData.shortDescription}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Nút gửi */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    {purpose}
                </button>
            </form>
        </div>
    );
});

// Đặt lại displayName để hỗ trợ debug trong React DevTools tốt hơn khi dùng forwardRef
GameInforForm.displayName = 'GameInforForm';

export default GameInforForm;