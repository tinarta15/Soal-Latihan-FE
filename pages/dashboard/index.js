import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FastBackwardOutlined,
    UserOutlined,
    DatabaseOutlined ,
  } from '@ant-design/icons';
import { Dialog, Transition } from '@headlessui/react'


  import { Layout, Menu } from 'antd';
  import React, { useState,Fragment } from 'react';
  const { Header, Sider, Content } = Layout;
  
  const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    
    let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

    
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Akun',
              },
              {
                key: '2',
                icon: <DatabaseOutlined />,
                label: 'Katalog Buku ',
              },
              {
                key: '3',
                icon: <FastBackwardOutlined /> ,
                label: 'Peminjaman ',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Tambah
        </button>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Tambah,Edit dan Hapus
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="judul" className="sr-only">
                  Judul
                </label>
                <input
                  id="judul"
                  name="judul"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="ISBN" className="sr-only">
                  ISBN
                </label>
                <input
                  id="ISBN"
                  name="ISBN"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="ISBN"
                />
              </div>
              <div>
                <label htmlFor="penerbit" className="sr-only">
                  penerbit
                </label>
                <input
                  id="penerbit"
                  name="penerbit"
                  type="penerbit"
                  autoComplete="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="penerbit"
                />
              </div>
              <div>
                <label htmlFor="deskripsi" className="sr-only">
                    deskripsi
                </label>
                <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="deskripsi"
      rows="3"
      placeholder="deskripsi"
    ></textarea>
              </div>
            </div>

            

            <div>
              <button
                type="simpan"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >

                simpan
              </button>
            </div>
          </form>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                     Batalkan
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
            <div class="container flex justify-center mx-auto">
    <div class="flex flex-col">
        <div class="w-full">
            <div class="border-b border-gray-200 shadow">
                <table>
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                NO
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Judul
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Penerbit
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Deskripsi
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Edit
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                1
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                    Sejarah Bangsa
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-500">2324324sds</div>
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                                buku ini menguraikan sejarah Bangsa
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-white bg-blue-400 rounded">Edit</a>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete</a>
                            </td>
                        </tr>
                        <tr class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                2
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                    Biografi Sukadana
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-500">4234422asd</div>
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                                Biografi tokoh
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-white bg-blue-400 rounded">Edit</a>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete</a>
                            </td>
                        </tr>
                       

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default App;