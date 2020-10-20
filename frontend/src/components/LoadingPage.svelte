<script>
  // import { showLoadingPage } from '../../store.js';

  // function cancelPage() {
  //   showLoadingPage.set(false);
  // }
</script>

<div class="showLoadingPage">
  <div class="loadingBackground"></div>
  <i class="xi-spinner-2 xi-spin xi-3x"></i>
  <p class="loadingText">loading</p>
  <!-- <button class="loadingCancel" on:click="{ cancelPage }">
    <i class="xi-close xi-2x"></i>
  </button> -->
</div>

<style>
	.showLoadingPage {
		position: absolute;
    z-index: 100;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.loadingBackground {
		position: absolute;
    z-index: -1;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.9);
	}

	.loadingText {
		position: relative;
		margin-top: 10px;
		color: white;
	}

	/* .loadingCancel {
		cursor: pointer;
		position: absolute;
		top: 1rem;
		right: 1rem;
		color: white;
		border: none;
		background-color: transparent;
	}

	.loadingCancel:active {
		background-color: transparent;
	} */
</style>