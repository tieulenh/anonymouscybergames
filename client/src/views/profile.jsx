import { useState, useEffect } from "react";
import { getToken } from "../utils/localstorage";
import { MapPin, Mail, Phone, User, Calendar, ShieldCheck } from 'lucide-react';

const Profile = () => {
    const [userInfor, setUserInfor] = useState({});
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch('/api/auth/me', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getToken()}`
                    }
                });
                const userData = await response.json();
                setUserInfor(userData.data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfileData();
    }, []);

    return (
        <div className="min-h-screen bg-[#0d1117] text-white p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT */}
                <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-11 h-fit">
                    <div className="flex flex-col items-center">

                        <img
                            src={userInfor?.avatarUrl}
                            alt="avatar"
                            className="w-56 h-56 rounded-full object-cover border-4 border-[#30363d]"
                        />

                        <h1 className="mt-5 text-3xl font-bold text-center">
                            {userInfor?.lastName} {userInfor?.firstName}
                        </h1>

                        <p className="text-gray-400 text-lg mt-2">
                            @{userInfor?.username}
                        </p>

                        <button
                            className="
                                mt-6
                                w-full
                                bg-[#21262d]
                                hover:bg-[#30363d]
                                border border-gray-700
                                rounded-lg
                                py-3
                                transition
                                font-medium
                            "
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-2 bg-[#161b22] border border-gray-800 rounded-2xl p-8">

                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold">
                            Profile Information
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* First Name */}
                        <div>
                            <p className="text-gray-400 mb-2">First Name</p>
                            <div className="bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3">
                                {userInfor?.firstName || "N/A"}
                            </div>
                        </div>

                        {/* Last Name */}
                        <div>
                            <p className="text-gray-400 mb-2">Last Name</p>
                            <div className="bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3">
                                {userInfor?.lastName || "N/A"}
                            </div>
                        </div>

                        {/* Username */}
                        <div>
                            <p className="text-gray-400 mb-2">Username</p>
                            <div className="bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3">
                                {userInfor?.username || "N/A"}
                            </div>
                        </div>

                        {/* Gender */}
                        <div>
                            <p className="text-gray-400 mb-2">Gender</p>
                            <div className="bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3">
                                {userInfor?.gender || "N/A"}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <p className="text-gray-400 mb-2">Email</p>
                            <div className="bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3 break-all">
                                {userInfor?.email || "N/A"}
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <p className="text-gray-400 mb-2">Phone Number</p>
                            <div className="bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3">
                                {userInfor?.phoneNumber || "N/A"}
                            </div>
                        </div>

                        {/* Address */}
                        <div className="md:col-span-2">
                            <p className="text-gray-400 mb-2">Address</p>
                            <div className="bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3">
                                {userInfor?.address || "N/A"}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;