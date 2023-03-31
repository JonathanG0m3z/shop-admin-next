import { XCircleIcon } from '@heroicons/react/24/solid';

const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }

  return (
    <>
      {alert?.active && (
        <div x-data className={`${alert?.type==="error"?"bg-red-400":"bg-green-400"} p-5 w-full rounded mb-8`}>
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-gray-700" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;