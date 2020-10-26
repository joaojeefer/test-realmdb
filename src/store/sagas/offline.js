import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
import { put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { OFFLINE, ONLINE } from 'redux-offline-queue';

function* watchNetworkConnection() {
  const channel = eventChannel((listener) => {
    const handleConectivityChange = (status) => listener(status);

    const unsubscribe = NetInfo.addEventListener((state) => {
      handleConectivityChange(state.isConnected);
    });

    return () => unsubscribe();
  });

  try {
    while (true) {
      const isConnected = yield take(channel);

      if (isConnected) {
        yield put({type: ONLINE});
        Snackbar.show({
          text: 'ONLINE',
          duration: Snackbar.LENGTH_INDEFINITE,
          backgroundColor: '#2557d6',
        });
      } else {
        yield put({type: OFFLINE});
        Snackbar.show({
          text: 'OFFLINE',
          duration: Snackbar.LENGTH_INDEFINITE,
          backgroundColor: '#b3131b',
        });
      }
    }
  } finally {
    channel.close();
  }
}

export default watchNetworkConnection;
