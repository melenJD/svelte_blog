<script>
  import { errorMessage, errorPage } from '../../store.js';

  function cancelPage() {
    errorPage.set(false);
  }
</script>

<div class="errorPage">
  <div class="errorBackground"></div>
  <i class="xi-warning xi-3x"></i>
  <p class="errorText">{$errorMessage}</p>
  <button class="errorCancel" on:click="{ cancelPage }">
    <i class="xi-close xi-2x"></i>
  </button>
</div>

<style>
	.errorPage {
		position: absolute;
    z-index: 100;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.errorBackground {
		position: absolute;
    z-index: -1;
		width: 100%;
		height: 100%;
		background-color: rgba(50,0,0,0.9);
	}

	.errorText {
		position: relative;
		margin-top: 10px;
		color: white;
	}

	.errorCancel {
		cursor: pointer;
		position: absolute;
		top: 1rem;
		right: 1rem;
		color: white;
		border: none;
		background-color: transparent;
	}

	.errorCancel:active {
		background-color: transparent;
	}
</style>