import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({
  totalPages,
  currentPage,
  setPage,
  threeDots,
  onRightclick,
  onLeftclick,
}) {
  let Pages = new Array(totalPages).fill(1);

  return (
    <div className="w-full mx-auto flex items-center justify-between border-t border-gray-200 px-4 py-1 md:py-3 sm:px-6">
      <div className="flex flex-1 justify-center gap-2 md:hidden">
        <button
          disabled={currentPage == 1}
          onClick={() => setPage((pre) => pre - 1)}
          className="relative  w-[100px] rounded-md border border-gray-300 bg-white px-2 md:px-4 py- md:py-2 
          text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((pre) => pre + 1)}
          disabled={currentPage == totalPages}
          className=" w-[100px] 
           rounded-md border border-gray-300 bg-white  px-2 md:px-4  py- md:py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>

      <div className="  mx-auto flex justify-center items-center  hidden md:block  ">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only" >Previous</span>

              <button onClick={onLeftclick} disabled={currentPage == 1}>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </a>

            {/* Render page numbers */}

            {totalPages < 4 &&
              Pages.map((_, index) => (
                <a
                  href="#"
                  key={index}
                  className={`relative inline-flex items-center px-4 py-2 text-sm hover:bg-[#2D322C] hover:text-white font-semibold ${
                    index + 1 === currentPage
                      ? "text-white bg-[#581e00]"
                      : "text-gray-900"
                  } ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </a>
              ))}

            {totalPages > 4 &&
              Pages.map((_, index) => {
                if (index < currentPage + 1 && index > currentPage - 3) {
                  return (
                    <a
                      href="#"
                      key={index}
                      className={`relative inline-flex items-center px-4 py-2 text-sm hover:bg-[#2D322C] hover:text-white font-semibold ${
                        index + 1 === currentPage
                          ? "text-white bg-[#581e00]"
                          : "text-gray-900"
                      } ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                      onClick={() => {
                        localStorage.setItem("page", JSON.stringify(index + 1));
                        setPage(index + 1);
                      }}
                    >
                      {index + 1}
                    </a>
                  );
                } else if (
                  index == currentPage + 1 ||
                  index == currentPage - 3
                ) {
                  return (
                    <a
                      href="#"
                      key={index}
                      className={`relative inline-flex items-center px-4 py-2 text-sm hover:bg-[#2D322C] hover:text-white font-semibold ${
                        index + 1 === currentPage
                          ? "text-white bg-[#581e00]"
                          : "text-gray-900"
                      } ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                      onClick={() => threeDots(index + 1)}
                    >
                      ...
                    </a>
                  );
                }
              })}

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>

              <button onClick={onRightclick} disabled={currentPage == totalPages}>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
